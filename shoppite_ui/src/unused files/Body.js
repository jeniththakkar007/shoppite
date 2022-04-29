import React from "react";
import './Body.css'
import { NavLink } from 'react-router-dom';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeIcon from '@mui/icons-material/Home';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ButtonGroup from "@material-ui/core/ButtonGroup";





class Header extends React.Component {
    constructor() {
        super();
        this.state ={id : 1}
     
    }
   
    render() {
        const StyledBadge = styled(Badge)(({  }) => ({
    
        }));
        return (
            <div >
                <span>
                    <button className="b1">Login</button>
                </span>
                <span className="cart1" >
                    <NavLink to="/cart">  <Badge color="success" badgeContent={this.state.id}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button onClick={() => this.setState({id:Math.max(this.state.id - 1, 0)})}>
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button onClick={() => this.setState({id:Math.max(this.state.id + 1, 0)})}>
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup> </NavLink>
                  

                </span>
                <span className="cart1">
                    <NavLink to="/home">  <IconButton className="cart1" >
                        <StyledBadge color="secondary">
                        <HomeIcon /> 
                        </StyledBadge>
                    </IconButton> </NavLink>
                </span>
                <span className="cart1">
                    <NavLink to="./laptop">
                    <IconButton className="cart1" >
                        <StyledBadge badgeContent={2} color="success" >
                        <FavoriteBorderIcon /> 
                        </StyledBadge>
                    </IconButton> </NavLink>
                </span>


            </div>
        );
    }
}
export default Header;