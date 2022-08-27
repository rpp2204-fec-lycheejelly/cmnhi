let ProductDesc = ({slogan, description, features}) => {
  return  <div className='product-description'>
            <div className='description-container'>
              <h3>{slogan}</h3>
              <p>{description}</p>
            </div>
            <div className='features'>
              {features && features.map(item => {
                return <p><b>&#10003;</b> {item.value} {item.feature}</p>
              })}
            </div>
          </div>
}

export default ProductDesc;