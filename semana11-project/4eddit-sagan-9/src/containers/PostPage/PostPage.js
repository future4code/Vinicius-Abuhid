import React, { Component } from 'react'
import Header from '../../Components/Header'
import PostWrapper from '../../Components/PostWrapper'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router/index'
import { createComment, voteForComment, voteForPostFromDetails } from '../../Actions/index'
import { IconButton, Paper, Typography, Button, TextField } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Footer from '../../Components/Footer'

const PageWrapper = styled.div`
  min-height:100vh;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin: 0 auto;
  margin-top: 20px;
`
const LabelButton = styled.div`
  font-size: 12px;
  margin: -5px;
  padding: 0;
`
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #e5e9ed;
  min-height:85vh;
`
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
  color: #4f4f50;
`
const PaperWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 15px;
  width: 100%;
`
const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;

`
const VoteArrowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 30px;
`
const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  width: 100%;
  border: 1px #ff7828 dotted;
`

class PostPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newComment: '',
      arrows: {
        up: '',
        down: ''
      }
    }
  }

  setLogout = () => {
    this.props.goToLogin()
    localStorage.clear()
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token')
    if (token === null) {
      this.props.goToLogin()
    }
  }

  saveComment = (e) => {
    this.setState({
      newComment: e.target.value
    })
  }

  sendComment = (e) => {
    e.preventDefault()
    this.props.createNewComment(this.state.newComment, this.props.postData.post.id)
    this.setState({ newComment: '' })
  }

  voteUser = (vote, postId, voteDirection) => {
    if (vote === 'vote +1') {
      if (voteDirection === 1) {
        vote = 0
      }
      else if (voteDirection === 0 || voteDirection === -1) {
        vote = 1
      }
      this.props.voteUserDirection(vote, postId)
    }
    else {
      if (voteDirection === -1) {
        vote = 0
      }
      else if (voteDirection === 0 || voteDirection === 1) {
        vote = -1
      }
      this.props.voteUserDirection(vote, postId)
    }
  }

  voteUserComment = (vote, postId, commentId, voteDirection) => {
    if (vote === 'vote +1') {
      if (voteDirection === 1) {
        vote = 0
      }
      else if (voteDirection === 0 || voteDirection === -1) {
        vote = 1
      }
      this.props.commentVoteUserDirection(vote, postId, commentId)
    }
    else {
      if (voteDirection === -1) {
        vote = 0
      }
      else if (voteDirection === 0 || voteDirection === 1) {
        vote = -1

      }
      this.props.commentVoteUserDirection(vote, postId, commentId)
    }
  }


  render() {
    let eachPost = this.props.postData.post
    let postDetails = ""
    if (this.props.postData) {
      postDetails =
        <ContentWrapper>
          <PostCard>
            <PostWrapper
              post={eachPost}
              arrowUp={eachPost.userVoteDirection === 1 ?
                <ArrowDropUpIcon color='primary' /> : <ArrowDropUpIcon />}
              arrowDown={eachPost.userVoteDirection === -1 ?
                <ArrowDropDownIcon color='primary' /> : <ArrowDropDownIcon />}
              votePlus={() => this.voteUser('vote +1', eachPost.id, eachPost.userVoteDirection)}
              voteMinus={() => this.voteUser('vote -1', eachPost.id, eachPost.userVoteDirection)}
            />
          </PostCard>
          <PaperWrapper elevation={10}>
            <FormWrapper onSubmit={this.sendComment}>
              <TextField
                label="Comentar"
                style={{ margin: 12 }}
                onChange={this.saveComment}
                value={this.state.newComment}
                name='text'
                type='text'
                required
                multiline={true}
                variant='outlined'
              />
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type={onsubmit}
                >
                  enviar
                </Button>
              </div>
            </FormWrapper>
          </PaperWrapper>
          {eachPost.comments.map((element, index) => {
            const clickUp = () => this.voteUserComment('vote +1', eachPost.id, element.id, element.userVoteDirection)
            let arrowUp = element.userVoteDirection === 1 ?
              <ArrowDropUpIcon color='primary' onClick={clickUp} />
              : <ArrowDropUpIcon onClick={clickUp} />
            const clickDown = () => this.voteUserComment('vote -1', eachPost.id, element.id, element.userVoteDirection)
            let arrowDown = element.userVoteDirection === -1 ?
              <ArrowDropDownIcon color='primary' onClick={clickDown} />
              : <ArrowDropDownIcon onClick={clickDown} />
            return (
              <PaperWrapper key={index} elevation={10}>
                <div>
                  <Typography
                    display='inline'
                    variant="body2" >
                    <Typography
                      gutterBottom
                      variant="h6"
                      color='primary'
                      display='inline'
                    >
                      {`${element.username} `}
                    </Typography>
                    respondeu:
                  </Typography>
                </div>
                <CommentWrapper>
                  <VoteArrowWrapper>
                    {arrowUp}
                    {element.votesCount || 0}
                    {arrowDown}
                  </VoteArrowWrapper>
                  <div>{element.text}</div>
                </CommentWrapper>
              </PaperWrapper>
            )
          })}
        </ContentWrapper>
    }
    else {
      this.props.goToPostFeed()
    }
    return (
      <PageWrapper>
        <Header
          logOutButton={
            <IconButton
              onClick={this.setLogout}
              color="inherit"
            >
            <div>
              <AccountCircle />
              <LabelButton>Logout</LabelButton>
            </div>
            </IconButton>
          }
        />
        <InfoWrapper>
          {postDetails}
        </InfoWrapper>
        <Footer />
      </PageWrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    postData: state.posts.postChoose
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goToLogin: () => dispatch(push(routes.root)),
    goToPostFeed: () => dispatch(push(routes.postFeed)),
    createNewComment: (comment, postId) => dispatch(createComment(comment, postId)),
    voteUserDirection: (vote, postId) => dispatch(voteForPostFromDetails(vote, postId)),
    commentVoteUserDirection: (vote, postId, commentId) => dispatch(voteForComment(vote, postId, commentId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)