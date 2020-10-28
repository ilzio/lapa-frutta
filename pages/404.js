
const Custom404= () => {
  return(
    <div className="Custom404">
        <h1> 404 Page not found!</h1>
    <style jsx>{`
        .Custom404 {
            height: 100vh;
            width: 100%;
            background-image: url('/assets/muro.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .Custom404 > h1 {
            color: white;
        }
    `}</style>    
    </div>
  ) 
}

export default Custom404