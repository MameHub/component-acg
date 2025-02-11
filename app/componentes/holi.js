export default function Holi({nombre}) {
    return(
        <div>
            {nombre && <p>Hola {nombre} ¿como estas?</p>}
            {!nombre && <p>Hola. No te conozco</p>}
        </div>
    );
}