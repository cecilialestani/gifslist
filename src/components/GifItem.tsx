export const GifItem = ({url, title}:{ url:string, title:string}) => {
  return (
    <div className="card">
      <img src={ url } alt={title}/>
      <p>{title}</p>
    </div>
  )
}