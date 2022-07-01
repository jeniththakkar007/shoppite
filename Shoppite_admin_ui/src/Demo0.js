import PropTypes from 'prop-types';
import React from 'react';
import Gallery from 'react-grid-gallery';


 export class Img_picker extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images
        };

        this.onSelectImage = this.onSelectImage.bind(this);

    }

    onSelectImage (index, image) {
        var images = this.state.images.slice();
        var img = images[index];
        if(img.hasOwnProperty("isSelected"))
            img.isSelected = !img.isSelected;
        else
            img.isSelected = true;

        this.setState({
            images: images
        });
    }

    render () {
        return (
            <>
                <div style={{
                    display: "block",
                    // minHeight: "1px",
                    width: "100%",
                    border: "1px solid #ddd",
                    overflow: "auto"}} className="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-xs-12 col-12">
                <Gallery
            images={this.state.images}
            onSelectImage={this.onSelectImage}
            lightboxWidth={1300}
                />
                </div>
                <div class="col-sm-9 text-secondary" style={{"marginBottom":"1%"}}>
									<input type="button" class="btn btn-primary last_btn" value="Select " />
								</div> 
                </> 
        );
    }
}

Img_picker.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired,
            isSelected: PropTypes.bool
        })
    ).isRequired
};

Img_picker.defaultProps = {
    images: ([
        {
          src: "/img_card3.png" ,
            thumbnail: "/img_card3.png",
            thumbnailWidth: 223,
            thumbnailHeight: 240,
            caption: ""
        },

        {
          src:"/img_card3.png",
            thumbnail: "/img_card3.png",
            thumbnailWidth: 223,
            thumbnailHeight: 240,
            caption: ""
        },

        {
          src:"img_card3.png" ,
            thumbnail: "/img_card3.png",
            thumbnailWidth: 223,
            thumbnailHeight: 240,
            caption: ""
        },

        {
           src:"/img_card3.png",
            thumbnail: "/img_card3.png",
            thumbnailWidth: 223,
            thumbnailHeight: 240,
            caption: ""
        },

        {
          src:"/img_card3.png",
            thumbnail: "/img_card3.png",
            thumbnailWidth: 223,
            thumbnailHeight: 240,
            caption: ""
        },

        {
          src:"/img_card3.png",
            thumbnail: "/img_card3.png",
            thumbnailWidth: 223,
            thumbnailHeight: 240,
            caption: ""
        },
        {
            src: "/img_card3.png" ,
              thumbnail: "/img_card3.png",
              thumbnailWidth: 223,
              thumbnailHeight: 240,
              caption: ""
          },
          {
            src: "/img_card3.png" ,
              thumbnail: "/img_card3.png",
              thumbnailWidth: 223,
              thumbnailHeight: 240,
              caption: ""
          },
          {
            src: "/img_card3.png" ,
              thumbnail: "/img_card3.png",
              thumbnailWidth: 223,
              thumbnailHeight: 240,
              caption: ""
          },
      
          {
            src: "/img_card3.png" ,
              thumbnail: "/img_card3.png",
              thumbnailWidth: 223,
              thumbnailHeight: 240,
              caption: ""
          },
          {
            src: "/img_card3.png" ,
              thumbnail: "/img_card3.png",
              thumbnailWidth: 223,
              thumbnailHeight: 240,
              caption: ""
          },
          {
            src: "/img_card3.png" ,
              thumbnail: "/img_card3.png",
              thumbnailWidth: 223,
              thumbnailHeight: 240,
              caption: ""
          }
      
    ])
};

