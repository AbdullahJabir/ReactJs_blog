import React from 'react'
import './style.css'
import Card from '../../../components/UI/Card'

const RecentPosts=props=>{
    return(

        <div style={props.style}>
                <Card style={{marginBottom:'20px'}}>
                    <div className="postImageWrapper">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGAb43NxZswWRLw9RoxC8YwykXlLy_efq2r674Xj0ffRR3D-0P" alt="" />
                    </div>
                    <div style={{textAlign:'center'}}>
                        <span>Feature</span>
                        <h2>Fitness Mantra</h2>
                        <span>Posted on 21 July 2019</span>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <button>Read More</button>
                    </div>
                </Card>

            
            </div>

        )

}
export default RecentPosts