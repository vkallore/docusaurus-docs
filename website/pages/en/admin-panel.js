/**
 * Adming panel index
 */
const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const adminPanel = (props) => {
    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <h1>Hello World!</h1>
          <p>This is my admin panel home page!</p>
        </Container>
      </div>
    );
  }

  module.exports = adminPanel;