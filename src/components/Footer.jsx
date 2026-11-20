import escudo from '../img/escudo-cucei.svg'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <img className="footerLogo" src={escudo} alt="Escudo de CUCEI" />

        <ul className="footerInfo">
          <li><strong>Integrante:</strong> Victoria Angélica Galarza Pérez</li>
          <li><strong>Profesor:</strong> Zeus Emanuel Gutiérrez Cobian</li>
          <li><strong>Materia:</strong> Desarrollo de Aplicaciones Web</li>
          <li><strong>Calendario escolar:</strong> 2026B</li>
          <li><strong>Mes y año:</strong> Noviembre 2026</li>
          <li><strong>Institución:</strong> CUCEI – Universidad de Guadalajara</li>
        </ul>
      </div>

      <p className="footerLove">Hecho con 💖 en CUCEI ✨</p>
    </footer>
  )
}

export default Footer
