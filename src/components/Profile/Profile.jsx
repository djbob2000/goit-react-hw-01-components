import PropTypes from 'prop-types';

import {
  ProfileDiv,
  DescriptionDiv,
  Name,
  Tag,
  Location,
  Stats,
  ProfileStatsBlock,
  Info,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  stats: { likes, views, followers },
  avatar,
}) => {
  return (
    <ProfileDiv>
      <DescriptionDiv>
        <img src={avatar} alt={`${username} avatar`} />
        <Name>{username}</Name>
        <Tag>{`@${tag}`}</Tag>
        <Location>{location}</Location>
      </DescriptionDiv>

      <Stats>
        <ProfileStatsBlock>
          <Info>Followers</Info>
          <Info>{followers}</Info>
        </ProfileStatsBlock>
        <ProfileStatsBlock>
          <Info>Views</Info>
          <Info>{views}</Info>
        </ProfileStatsBlock>
        <ProfileStatsBlock>
          <Info>Likes</Info>
          <Info>{likes}</Info>
        </ProfileStatsBlock>
      </Stats>
    </ProfileDiv>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};
