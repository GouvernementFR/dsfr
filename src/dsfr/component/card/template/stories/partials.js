import card from '../ejs/card.ejs?raw';
import cardContent from '../ejs/card-content.ejs?raw';
import cardDetails from '../ejs/card-details.ejs?raw';
import cardEnd from '../ejs/card-end.ejs?raw';
import cardHeader from '../ejs/card-header.ejs?raw';
import cardFooter from '../ejs/card-footer.ejs?raw';
import cardStart from '../ejs/card-start.ejs?raw';

export const cardPartials = [
  {
    names: ['card'],
    partial: card
  },
  {
    names: ['card-content'],
    partial: cardContent
  },
  {
    names: ['card-details'],
    partial: cardDetails
  },
  {
    names: ['card-end'],
    partial: cardEnd
  },
  {
    names: ['card-header'],
    partial: cardHeader
  },
  {
    names: ['card-footer'],
    partial: cardFooter
  },
  {
    names: ['card-start'],
    partial: cardStart
  }
];
