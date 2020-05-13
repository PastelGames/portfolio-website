import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Styles = styled.div`
    .navbar{
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #fffff;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Pastel Pink Games &lt;3</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link active="false">
                            <Link to="/" className="nav-link">Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active="false">
                            <Link to="/games" className="nav-link">Games</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active="false">
                            <Link to="/programming" className="nav-link">Programming</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)