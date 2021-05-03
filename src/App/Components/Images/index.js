import React from 'react';
import port_map from '../../port_map.js';
import Lightbox from 'react-image-lightbox';

class Images extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render () {

        // grab the specified images to split
        const imageIds = this.props.src.split(',');

        // create an array of URL's, based on port_map settings
        const imageUrlArray = [];
        let rowHeight = "200px";
        if (this.props.height) {
            rowHeight = this.props.height;
        }
        imageIds.forEach((id, index) => {
            let imageUrl;
            if (id.trim().startsWith('http')) {
                imageUrl = id.trim()
            } else if (id.trim().startsWith('/')) {
                imageUrl = port_map.asset_servers[this.props.srv].host
                + ":"
                + port_map.asset_servers[this.props.srv].port
                + id.trim()
            } else {
                imageUrl = port_map.asset_servers[this.props.srv].host
                + ":"
                + port_map.asset_servers[this.props.srv].port
                + this.props.page
                + "/"
                + id.trim()
            }
            if (!id.includes('http')) {

            }
            imageUrlArray.push({
                url: imageUrl,
                index: index,
                height: rowHeight
            })
        });

        // how many columns?
        let imageUrlChunkSize = 3;
        let imageUrlChunkSizeArray = [];
        if (this.props.cols) {
            imageUrlChunkSize = parseInt(this.props.cols);
            if (this.props.cols.includes(',')) {
                imageUrlChunkSizeArray = this.props.cols.split(',');
            }
        }

        // split the array or urls into groups of 3
        const imageUrlArrays = [];
        const imageUrlArrayToSplice = [...imageUrlArray];
        if (imageUrlArrayToSplice.length > 0) {
            if (imageUrlChunkSizeArray.length > 0) {
                let imageUrlChunkSizeArrayi = 0;
                while (imageUrlArrayToSplice.length > 0) {
                    imageUrlArrays.push(imageUrlArrayToSplice.splice(0, parseInt(imageUrlChunkSizeArray[imageUrlChunkSizeArrayi])));
                    imageUrlChunkSizeArrayi++;
                    if (imageUrlChunkSizeArrayi > imageUrlChunkSizeArray.length - 1) {
                        imageUrlChunkSizeArrayi = 0;
                    }
                }
            } else {
                while (imageUrlArrayToSplice.length > 0) {
                    imageUrlArrays.push(imageUrlArrayToSplice.splice(0, imageUrlChunkSize));
                }
            }
        }

        // what is the height of the row?
        let rowHeightArray = [];
        if (this.props.height) {
            if (this.props.height.includes(',')) {
                rowHeightArray = this.props.height.split(',');
                let imageUrlArraysi = 0;
                imageUrlArrays.forEach((array, index1) => {
                    array.forEach((element, index2) => {
                        imageUrlArrays[index1][index2].height = rowHeightArray[imageUrlArraysi];
                    });
                    imageUrlArraysi++;
                    if (imageUrlArraysi > rowHeightArray.length - 1) {
                        imageUrlArraysi = 0;
                    }
                });
            }
        }

        // turn each group of three arrays into a row
        const imageGridRows = imageUrlArrays.map((row, index1) => (
            <span key={index1} className="imageGridContainer">
                {row.map((url, index2) => {


                    return(
                        <span
                            key={index2}
                            className="imageGridItem"
                            style={{
                                flex: this.props.random ? Math.floor(Math.random() * 2) + 3 : 1, //((index1*imageUrlChunkSize)+index2)+1
                                height: url.height,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage: `url(${url.url})`
                            }}
                            onClick={() => this.setState({ isOpen: true, photoIndex: url.index})}
                        ></span>
                    )
                })}
            </span>
        ));

        const { photoIndex, isOpen } = this.state;

        return (
            <div className="imageGridWrapper">
                {imageGridRows}
                {isOpen && (
                    <Lightbox
                        mainSrc={imageUrlArray[photoIndex].url}
                        nextSrc={imageUrlArray[(photoIndex + 1) % imageUrlArray.length]}
                        prevSrc={imageUrlArray[(photoIndex + imageUrlArray.length - 1) % imageUrlArray.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + imageUrlArray.length - 1) % imageUrlArray.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % imageUrlArray.length,
                            })
                        }
                    />
                )}
            </div>
        )
    }
}

export default Images;
