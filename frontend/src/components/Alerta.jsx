const Alerta = ({alerta}) => {
    return (
        <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-blue-500 to-cyan-400'} bg-gradient-to-r text-center p-2 rounded-xl uppercase text-white font-bold text-sm my-5 `}>
        {alerta.msg}
        </div>
    )
};
export default Alerta;