interface propsType{
    size:string;
}

const cardCountbadge:React.FC<propsType> = ({size}) => {
  return (

    <div className={'absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-item-center'}>
        3</div>
 )
}

export default cardCountbadge