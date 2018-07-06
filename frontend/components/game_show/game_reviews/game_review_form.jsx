import React from 'react';
import { withRouter } from 'react-router-dom';
import { emptyStar, fullStar, downloadIcon } from '../../logo';

class GameReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.goPurchase = this.goPurchase.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
   
    if (this.props.callback) {
      this.props.callback();
    }
    this.props.processForm(this.state);
 
    this.setState({ body: '' });
  }

  updateRating(num) {
    return (e) => {
      const labels = document.querySelectorAll(".review-form-rating > label");
      labels.forEach(label => {
        label.classList.remove('checked');
      });
      this.setState({rating:num});
      e.target.classList.add('checked');

    };
  }

  goPurchase(e){
    e.preventDefault();
    window.location.href = `${this.props.game.purchase_link}`;
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  render() {
    if (this.props.isEditForm) {
      document.getElementsByClassName('review-form-rating')[0].classList.add('edit-form-rating');
    }
    const header = (this.props.submitButton === "Submit Review") ? <h3>Review this game!</h3> : null;
    const placeholderText = (this.props.errors.length)
     ? "You've already reviewed this game. Please edit or delete your previous review."
     : "Write a review...";

    let purchaseButton;
    const game = this.props.game;
    if (game && game.purchase_link) {
      if (game.purchase_link.includes('amazon')) {
        purchaseButton = <img src="https://i.imgur.com/s9ByP9K.png" className="amazon-link" onClick={this.goPurchase}/>;
      } else if (game.purchase_link.includes('steam')) {
        purchaseButton = <img src="http://www.freelogovectors.net/wp-content/uploads/2016/12/steam-logo.png" className="steam-link" onClick={this.goPurchase} />;
      } else {
        purchaseButton = <button className="download-link" onClick={this.goPurchase}>{downloadIcon} Download</button>;
      }
    }
    return (
      <div className="review-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="review-top">
            <div className="review-left">
              {header}

              <div className="review-form-rating">
                <input type="radio" id="star5" name="rating" value="5" />
                <label className = "full" htmlFor="star5" title="Awesome - 5 stars" onClick={this.updateRating(5)}></label>
                <input type="radio" id="star4" name="rating" value="4"/>
                <label className = "full" htmlFor="star4" title="Pretty good - 4 stars" onClick={this.updateRating(4)}></label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label className = "full" htmlFor="star3" title="Meh - 3 stars" onClick={this.updateRating(3)}></label>
                <input type="radio" id="star2" name="rating" value="2"/>
                <label className = "full" htmlFor="star2" title="Kinda bad - 2 stars" onClick={this.updateRating(2)}></label>
                <input type="radio" id="star1" name="rating" value="1"/>
                <label className = "full" htmlFor="star1" title="Sucks big time - 1 star" onClick={this.updateRating(1)}></label>
              </div>
            </div>
            <div className="purchase-link">
              {purchaseButton}
            </div>
          </div>

          <textarea
            className="review-form-body"
            placeholder={placeholderText}
            value={this.state.body}
            onChange={this.update('body')}
          />

          <input
            className="review-form-button"
            type="submit"
            value={this.props.submitButton} />

        </form>
      </div>
    );
  }
}

export default withRouter(GameReviewForm);
