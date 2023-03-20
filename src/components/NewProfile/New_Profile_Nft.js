import React from 'react';
import { LensAuthContext } from '../../context/LensContext';
import DisplayPublications from '../Marketplace/NFTPost/NftPostModal';
export default function NftCollectedInProfile() {

    const lensAuthContext = React.useContext(LensAuthContext);
    const { NFTCollected } = lensAuthContext;
console.log(NFTCollected);
    return (
        <div style={{ display: "flex" }} className='row'>

            <h3>collected nfts</h3>
            {
                NFTCollected && NFTCollected.map((pub) => {
                    // console.log(pub);
                    if (pub.__typename === "Post" ) {
                        return (
                            <div className='col-6'>
                                <DisplayPublications pub={pub} />
                            </div>
                        )
                    } 
                })
            }
           
        </div>
    )
}
