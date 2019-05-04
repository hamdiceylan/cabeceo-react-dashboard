import React from 'react'
import { Feed, Icon, Image, Header } from 'semantic-ui-react'

const FeedExampleBasic = () => (
  <Feed style={{backgroundColor: 'white', padding: '30px'}}>
    <Header style={{textAlign : 'center'}} as='h2'> Live Feed</Header>
    <Feed.Event>
      <Feed.Label>
        <Image src='https://randomuser.me/api/portraits/women/25.jpg' />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://randomuser.me/api/portraits/women/24.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a href="#">Helen Troy</a> added <a>2 new illustrations</a>
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a href="#">
            <Image src='https://randomuser.me/api/portraits/women/22.jpg' />
          </a>
          <a href="#">
            <Image src='https://randomuser.me/api/portraits/women/22.jpg' />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            1 Like
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://randomuser.me/api/portraits/women/12.jpg' />
      <Feed.Content>
        <Feed.Summary date='2 Days Ago' user='Jenny Hess' content='add you as a friend' />
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            8 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://randomuser.me/api/portraits/women/21.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a href="#">Joe Henderson</a> posted on his page
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          Ours is a life of constant reruns. We're always circling back to where we'd we started,
          then starting all over again. Even if we don't run extra laps that day, we surely will
          come back for more of the same another day soon.
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            5 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://randomuser.me/api/portraits/women/28.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a href="#">Justen Kitsune</a> added <a>2 new photos</a> of you
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a href="#">
            <Image src='https://randomuser.me/api/portraits/women/22.jpg' />
          </a>
          <a href="#">
            <Image src='https://randomuser.me/api/portraits/women/22.jpg' />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            41 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default FeedExampleBasic