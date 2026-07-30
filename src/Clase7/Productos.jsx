import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase.js";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const Productos = () => {   
    const [productos, setProductos] = useState([]);
    const [ultimoDoc, setUltimoDoc] = useState(0);
    const {id} = useParams();

    const cargarPrimeraPagina = async () => {
        const querySnapshot = await collection('productos').limit(2).get();
        const productosArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(productosArray);
        setUltimoDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
    };

    const cargarSiguientePagina = async () => {
        if (!ultimoDoc) return;
        const querySnapshot = await collection('productos').startAfter(ultimoDoc).limit(10).get();
        const productosArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(prev => [...prev, ...productosArray]);
        setUltimoDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
    };

    useEffect(() => {
        // Trae todos los Productos
        /* async function fetchProductos() {
            const productosCollection = collection(db, "productos");
            const productosSnapshot = await getDocs(productosCollection);
            const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProductos(productosList);
        } */

        /* async function fetchProductosPapas(id, importe) {
            const productosCollection = collection(db, "productos");
            let q = id ? query(productosCollection, where('categoria', '==', id), where('precio', '>=', importe)) : productosCollection;
            const productosSnapshot = await getDocs(q);
            const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProductos(productosList);
        } */

        async function fetchProductosLimit(limite) {
            const productosCollection = collection(db, "productos");
            const q = limite > 0 ? query(productosCollection, limit(limite)) : productosCollection;
            const productosSnapshot = await getDocs(q);
            const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProductos(productosList);
        }

        //fetchProductos();
        //fetchProductosPapas(id, 12000);
        //fetchProductosLimit(1);
        cargarPrimeraPagina();
    }, [id])

    //const items = id ? arrayProductos.filter(item => item.id == id) : arrayProductos;

    return (
        <div className="container my-5">
            <div className="row">
                {
                    productos.map(item => (
                        <div key={item.id} className="col-md-2">
                            <div className="card text-center border-0">
                                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                                <div className="card-body">
                                    <p className="card-text">{item.nombre}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary" onClick={cargarPrimeraPagina}>Primera Página</button>
                        <button type="button" className="btn btn-primary" onClick={cargarSiguientePagina}>Siguiente Página</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productos