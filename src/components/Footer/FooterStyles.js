import styled from "styled-components"

export const FooterWrapper = styled.section`
  box-sizing: content-box;
  border-top: 1px solid lightgrey;
  margin-top: 50px;
  background-color: #17181a;


  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`

export const LinkItem = styled.a`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-left: 10px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: #fff;
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 8px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`

export const SocialIconsContainer = styled.div`
max-width: 1040px;
display: flex;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
}
`

export const SocialContainer = styled.div`
	display: flex;
  	align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`

export const LinkList = styled.ul`
	display: flex;
  	padding: 40px 0 28px;

	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 16px;
	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 5px;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	// max-width: 220px;
	width: 100%;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`
