import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getTheTripList } from '../../actions/index'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import Search from '@material-ui/icons/Search'
import Share from '@material-ui/icons/Share'
import TripCard from '../../components/TripCard'
import Logo from '../../assets/Logo2.PNG'

const PageWrapper = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
`
const HeaderWrapper = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px
`
const LogoWrapper = styled.img`
    width: 120px;
    height: 50px
`

const ToolbarWrapper = styled.div`
    width: 100%;
    background-color: #ff7828;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px 50px 50px
`
const SearchWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
    width: 30%;
    margin-top: 20px
`
const MainWrapper = styled.div`
    background-image: url("https://images.wallpaperscraft.com/image/milky_way_starry_sky_galaxy_119519_1920x1080.jpg");
    display: flex;
    flex-direction: column;
    padding-bottom: 15px
`
const FooterWraper = styled.footer`
    background-color: #ff7828;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    color: white;
    font-weight: bold;
`
const ButtonWrapper = styled(Button)`
    width: 20%;
    align-self: center;
    margin-bottom: 10px
`

class ListTripsPageForUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }

    componentDidMount() {
        this.props.getTrips()
    }

    searchTrip = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    goToForm = () => {
        this.props.goToFormPage()
    }

    goToLogin = () => {
        this.props.goToLoginPage()
    }

    goHome = () => {
        this.props.goToHomePage()
    }

    render() {
        let filteredTripList = this.props.allTrips
        if (this.state.search !== "") {
            const lowerCaseSearch = this.state.search.toLowerCase()
            const search = filteredTripList.filter((trip, index) => {
                return trip.name.toLowerCase().includes(lowerCaseSearch)
            })
            filteredTripList = search
        }
        return (
            <PageWrapper>
                <HeaderWrapper>
                    <LogoWrapper
                        onClick={this.goHome}
                        src={Logo}
                        alt='Logo' />
                    <Button
                        onClick={this.goToLogin}
                    >Login</Button>
                </HeaderWrapper>
                <ToolbarWrapper>
                    <h2>Nossos pacotes</h2>
                    <SearchWrapper>
                        <label>Buscar viagem:</label>
                        <input
                            onChange={this.searchTrip}
                            value={this.state.search}
                            type='text' />
                        <Search />
                    </SearchWrapper>
                </ToolbarWrapper>
                <MainWrapper>
                    {filteredTripList.map((trip, index) => {
                        return <TripCard
                            trip={trip}
                            buttonText='Candidatar'
                            buttonFunction={this.goToForm}
                            key={index}
                            icon={<Share />}
                        />
                    })}
                    <ButtonWrapper
                        variant="contained"
                        onClick={this.goHome}
                    >
                        HomePage
                </ButtonWrapper>
                </MainWrapper>
                <FooterWraper>Feito por Vinícius Abuhid</FooterWraper>
            </PageWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        allTrips: state.trips.tripList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToFormPage: () => dispatch(push(routes.formPage)),
        getTrips: () => dispatch(getTheTripList()),
        goToLoginPage: () => dispatch(push(routes.loginPage)),
        goToHomePage: () => dispatch(push(routes.root))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPageForUsers);