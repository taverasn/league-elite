import styles from './ChampionModal.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const ChampionModal = (props) => {
  
    const [show, setShow] = useState(false);

    return (
      <>
        <Button  className={styles.Button} variant="primary" onClick={() => setShow(true)}>
            <img 
                src={"http://ddragon.leagueoflegends.com/cdn/11.1.1/img/champion/" + props.champion.id + ".png"} 
                alt=""
                className={styles.champImage}
            ></img>                    
            <p>{props.champion.name}</p>  
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          centered={true}
          size="sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              <h1>{props.champion.name} - {props.champion.title}</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>HP: {props.champion.stats.hp}</p>
            <p>Armor: {props.champion.stats.armor}</p>
            <p>Attack Damage: {props.champion.stats.attackdamage}</p>
            <p>Range: {props.champion.stats.attackrange} Units</p>
            <p>Speed: {props.champion.stats.movespeed}</p>
            {
                props.champion.stats.mp ?
                <p>
                        Mana/Energy: {props.champion.stats.mp}
                </p>
                        :
                        ""
            }
          </Modal.Body>
        </Modal>
      </>
    );
  }


export default ChampionModal;