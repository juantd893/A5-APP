import Flickity from "react-flickity-component";



const flickityOptions = {
  initialIndex: 1,
  freeScroll: true,
wrapAround: true
}






function Carousel() {
  return (
    <p>
      <Flickity 
      
      className={'carousel'}                
      elementType={'div'}                   
      options={flickityOptions}
      disableImagesLoaded
      reloadOnUpdate
      static
  
      
  >
        <img className="carou" src="https://azteca5.com.mx/mobile_img/1.jpg" />

        <img className="carou" src="https://azteca5.com.mx/mobile_img/2.jpg" />

        <img className="carou" src="https://azteca5.com.mx/mobile_img/3.jpg" />
      </Flickity>
    </p>
  );
}

export default Carousel;