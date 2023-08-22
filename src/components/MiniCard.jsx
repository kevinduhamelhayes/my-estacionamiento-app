

const MiniCard = ({patente, tiempo, abonado}) => {
  return (
  <div className=" absolute top-14 -left-10 p-2 w-40 text-center bg-white border-2 rounded-lg shadow z-20 border-slate-950">
              <div className="absolute -top-1 right-20 w-2 h-2 rotate-45 -z-10 bg-white border-t-2 border-slate-950 border-l-2"></div>
              <div className="z-20">Plate: {patente}</div>
              <div className="z-20">Time: {tiempo}</div>
              <div className="z-20">Abonado: {abonado}</div>
            </div>
  )
}

export default MiniCard