import styled from 'styled-components'

 export const Container = styled.div`

display:grid;
justify-content:center;
align-content:center;
width:400px;

grid-template-columns:repeat(4,100px);
grid-template-rows:minmax(120px,auto) repeat(5,100px);

// min-height:500px;
border-radius:10px;
box-shadow:2px 2px 10px #333;
margin: 40px auto;

`
export const Screen = styled.div`
grid-column:1/-1;
background-color:#808080;
display:flex;
justify-content:space-around;
flex-direction:column;
padding:10px;
word-wrap:break-word;
word-break:break-all;
text-align:right;
border-top-left-radius:10px;
border-top-right-radius:10px;


`
export const Previous = styled.div`
font-size:1.5rem;
color:#dcdcdc;
`
export const Current = styled.div`
color:white;
font-size:2.5rem`

export const Button = styled.button`
font-size:2rem;
cursor:pointer;
outline:none;
border:1px outset white;
background-color:#fff;
&:hover{
    background-color:#b2beb5;
   
}
${({equals})=>equals && "border-bottom-right-radius:10px"}
${({zero})=> zero && "border-bottom-left-radius:10px"}`


