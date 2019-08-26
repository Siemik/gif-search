App = React.createClass ({
  render: function() {
    var styles = {
      margin: '0 auto',
      textAlign: 'center',
      width: '90%'
    };

    return (
      <div style={styles}>
        <h1>Wyszukiwarka GIFow!</h1>
        <p>Znajdz gifa na <a href='http://giphy.com'>giphy</a>. Nacisnij enter, aby pobrać kolejne gify.</p>
        <Search />
        <Gif
          loading={this.state.loading}
          url={this.state.gif.url}
          sourceUrl={this.state.gif.sourceUrl}
          getInitialState() {
              return {
                  loading: false,
                  searchingText: '',
                  gif: {}
              };
          },
        />
      </div>
    );
  }
});
