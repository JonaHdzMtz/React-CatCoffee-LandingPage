interface CatCircleItem {
  url: string;
  index: number;
  onclickCat : ()=>void;
 
}


export const CircleCatItem = (props: CatCircleItem) => {
  return (
    <div onClick={props.onclickCat} className={`gap-20 justify-center items-center rounded-full border-black border-4 hover:border-4 hover:border-orange-200 hover:cursor-pointer  hover:scale-120 duration-300`}>
      <img src={props.url} alt="" className={`opacity-75  hover:opacity-100 duration-300 h-35 w-35 md:h-50 md:w-50 rounded-full`} />
   
    </div>
  );
};
