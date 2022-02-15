import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:200px;
  border-radius: 8px 8px 0px 0px;
  object-fit: cover;
  overflow: hidden;
  opacity: 0.9;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`
export const BlogCard = styled.div`
  border-radius: 8px;
  background-color: #17181a;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 30%;
  height: 1px;
  margin: 20px auto;
  border: 0;
  background: ${(props) => props.colorAlt ? 
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: white;
  font-size: 12px;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const SiteWebLink = styled.a`
color: white;
background-color: #295660;
font-size: 1.4rem;
width: 30%;
padding: 1rem 1.5rem;
border-radius: 8px;
transition: 0.5s;
&:hover{
  background: #3b6d78;

}
`;

export const GitHubLink = styled.a`
color: white;
background-color: #51416e;
font-size: 1.4rem;
width: 30%;
padding: 1rem 1.5rem;
border-radius: 8px;
transition: 0.5s;
&:hover{
  background: #635381;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #81aacb;
font-size: 1.5rem;
`