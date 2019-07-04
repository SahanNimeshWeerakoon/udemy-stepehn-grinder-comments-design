import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail';
import Faker from 'faker'
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
           <CommentDetail author="Sam" timeAgo="Today at 5.30 AM" imgSrc={Faker.image.avatar()} blogPost="Nice Blog Mother Fucker" />
        </ApprovalCard>
        <ApprovalCard>
           <CommentDetail author="Alex" timeAgo="Today at 6.30 AM" imgSrc={Faker.image.avatar()} blogPost="Shitty Blog Mother Fucker" />
        </ApprovalCard>
        <ApprovalCard>
           <CommentDetail author="Jane"  timeAgo="Yesterday at 5.30 AM" imgSrc={Faker.image.avatar()} blogPost="Ass Blog Mother Fucker"/>
        </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));