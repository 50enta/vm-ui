import Select from '../../components/genericFields/fields/Select';
import DoneIcon from '@mui/icons-material/Done';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { GeneralFetch } from '../../api/generalFetch/generalFetch';

export function SetIcon({ node_id, setUpdateForm }) {
    const [option, setOption] = useState()
    const { FetchData } = GeneralFetch()

    const selectContent = [
        { nome: 'Circulo', id: 'circle' },
        { nome: 'Elipse', id: 'ellipse' },
        { nome: 'Banco de dados', id: 'database' },
        { nome: 'Caixa', id: 'box' },
        { nome: 'Triangulo', id: 'triangle' },
        { nome: 'Triangulo Invertido', id: 'triangleDown' },
        { nome: 'Hexagono', id: 'hexagon' },
        { nome: 'Diamante', id: 'diamond' },
        { nome: 'Ponto', id: 'dot' },
        { nome: 'Estrela', id: 'star' },
        { nome: 'Quadrado', id: 'square' },
    ]

    function Save() {
        (async () => {
            let response = await FetchData(option, 'changeNodeIcon', 'POST', false, 'nodeIcon')
            if (response == 1) {
                setUpdateForm({ id: node_id, shape: option.icon })
            }
        })()
    }

    return (
        <div style={{ marginTop: '25px', display: 'grid', gridTemplateColumns: '83% 7%' }} >
            <div style={{ marginLeft: '-15px' }} >
                <Select
                    label='Icone'
                    options={selectContent}
                    setInfos={setOption}
                    infos={option}
                    node_id={node_id}
                />
            </div>
            <div style={{ marginLeft: '20px', paddingBottom: '10px' }} >
                <IconButton aria-label="delete" size="medium" onClick={() => Save()}>
                    <DoneIcon fontSize="inherit" />
                </IconButton>
            </div>
        </div>
    )
}