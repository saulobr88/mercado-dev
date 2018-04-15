import React, {Component} from 'react';
import axios from 'axios';

import AnuncioHome from './AnuncioHome';

class Categoria extends Component {

    constructor(props) {
        super(props);

        this.state = {
            anuncios: {},
            isLoading: false
        };
        this.categoria = null;

        this.loadAnuncios = this.loadAnuncios.bind(this);
        
    }

    loadAnuncios(urlCategoria) {
        this.setState({
            isLoading: true,
            anuncios: {}
        });

        // Load data.
        const url = `https://mercado-dev-f078d.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22${urlCategoria}%22`;
        axios
            .get(url)
            .then(data => {
                this.setState({anuncios: data.data, isLoading: false});
                this.categoria = urlCategoria;
            });
    }

    componentDidMount() {
        if(this.categoria == null) this.loadAnuncios();
    }

    componentWillReceiveProps(newProps) {
        const urlCategoria = newProps.match.params.urlCategoria
        if (urlCategoria) {
            if (this.categoria !== urlCategoria) {
                this.loadAnuncios(urlCategoria);
            }
        }
    }

    render() {
        const anuncios = this.state.anuncios;

        return (
            <div>
                <h1>
                    Categoria: &nbsp; "{this.props.match.params.urlCategoria}"
                </h1>
                {
                    this.state.isLoading && <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                }
                {
                    !this.state.isLoading && Object.keys(this.state.anuncios).length === 0 && <p>Nada registrado.</p>
                }
                <div className='row'>
                    {
                        Object.keys(anuncios).map(_key => {
                            const _anuncio = this.state.anuncios[_key];
                            return <AnuncioHome key={_key} id={_key} anuncio={_anuncio} />
                        })
                    }
                </div>
            </div>
        
        );
    }
    
}

export default Categoria;