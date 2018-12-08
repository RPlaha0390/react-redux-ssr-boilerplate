import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Container } from '../App';

const Header = ({ auth }) => {

  const Nav = styled.div`
    background: #db7093;
    padding: 15px 0;
    margin: 0 0 15px 0;
  `;

  const Title = styled.h1`
    font-size: 24px;
    margin-top: 0;
  `;

  const NavLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    display: inline-block;
    padding-right: 15px;
  `;

  const AuthLink = styled.a`
    text-decoration: none;
    color: #8e3b56;
    font-weight: bold;
    float: right;
  `;

  const authButton = auth ? (
    <AuthLink href="/api/logout">Logout</AuthLink>
  ) : (
    <AuthLink href="/api/auth/google">Login</AuthLink>
  );

  return (
    <Nav>
      <Container>
        <Title>
          <NavLink to="/">React SSR</NavLink>
        </Title>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/admins">Admins</NavLink>
        { authButton }
      </Container>
    </Nav>
  )
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
