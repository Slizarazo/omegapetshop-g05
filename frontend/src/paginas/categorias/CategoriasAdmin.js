import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import APIInvoke from '../../utils/APIInvoke'
import swal from 'sweetalert';

const CategoriasAdmin = () => {

    const [categorias, setCategorias] = useState([]);

    const cargarCategorias = async () => {
        const response = await APIInvoke.invokeGET(`/api/categorias`);
        //console.log(response.categorias);
        setCategorias(response.categorias);
    }

    useEffect(() => {
        cargarCategorias();
    }, [])

    const eliminarCategoria = async (e, idCategoria) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/categorias/${idCategoria}`);

        if (response.msg === 'Categoria eliminada') {
            const msg = "La categoria fue borrada correctamente.";
            swal({
                title: 'Información',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });
            cargarCategorias();
        } else {
            const msg = "La categoria no fue borrada correctamente.";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        }

    }

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Listado de Categorías"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Categorias"}
                    ruta1={"/home"}
                />

                <section className="content">

                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"><Link to={"/categorias-crear"} className="btn btn-block btn-primary btn-sm">Crear Categoría</Link></h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%' }}>Id</th>
                                        <th style={{ width: '60%' }}>Nombre</th>
                                        <th style={{ width: '10%' }}>Ver</th>
                                        <th style={{ width: '20%' }}>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categorias.map(
                                            item =>
                                                <tr key={item._id}>
                                                    <td>{item._id}</td>
                                                    <td>{item.nombre}</td>
                                                    <td>
                                                        <Link to={`/productos-admin/${item._id}@${item.nombre}`} className="btn btn-sm btn-info">Productos</Link>&nbsp;&nbsp; 
                                                    </td>
                                                    <td>
                                                        <Link to={`/categorias-editar/${item._id}@${item.nombre}`} className="btn btn-sm btn-primary">Editar</Link>&nbsp;&nbsp;
                                                        <button onClick={(e) => eliminarCategoria(e, item._id)} className="btn btn-sm btn-danger">Borrar</button>
                                                    </td>
                                                </tr>
                                        )
                                    }

                                </tbody>
                            </table>

                        </div>
                    </div>

                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default CategoriasAdmin;