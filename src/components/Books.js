import { FaStar } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";

function Books(props) {

    const { imgLink, heading, rupees } = props

    return (

        <div style={{


        }}>

            <div style={{


                width: "150px",
                height: "300px",
                borderRadius: "5px",
                margin: "auto",
                borderBox: "grey",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                padding: "10px 20px",
                alignSelf: "normal"


            }}>
                <img style={{


                    width: "187px",
                    height: "170px",
                    objectFit: "contain",
                    backgroundColor:"#F5F5F5",
                    borderRadius:"5px",
                    overflow:"hidden",
                    marginLeft:"-18px",
                    marginTop:"-9px"




                }} src={imgLink} alt="craig Thompson" />

                <div style={{


                    width: "150px",
                    minHeight: "100%",
                    display: "inline-block",
                    textAlign: "center",
                    overflow: "hidden"



                }}>
                    <p style={{

                        fontWeight: "bold"

                    }}>{heading}</p>
                    {[1, 2, 3, 4, 5].map((e) => (
                        <FaStar />
                    ))}

                    <p style={{

                        fontWeight: "normal"
                    }} ><LiaRupeeSignSolid />{rupees}</p>
                </div>

            </div>
        </div>

    )
}

export default Books;