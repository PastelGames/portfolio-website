import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import "98.css";

const Styles = styled.div`
    .navbar-brand {
        color: #fffff;
        font-size: 30px;
    }

    .navbar-nav .nav-link {
        color: #fffff;
        font-size: 18px;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <button>
                <Navbar.Brand href="/" className="navbar-brand">Pastel Pink Games &lt;3</Navbar.Brand>
            </button>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link active="false">
                            <button active="false">
                                <Link to="/" className="nav-link">Home</Link>
                            </button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active="false">
                            <button>
                                <Link to="/games" className="nav-link">Games</Link>
                            </button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active="false">
                            <button>
                                <Link to="/programming" className="nav-link">Programming</Link>
                            </button>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)