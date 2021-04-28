import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  Checkbox,
  Text,
  useDisclosure,
  Collapse,
  ScaleFade,
  Center,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { InputField } from '../../templates/inputField';
import { ImageInputField } from '../../templates/imageInputField';
import { InputTextArea } from '../../templates/inputTextArea';
import { getProfileById, postProfile } from '../../../actions/profile';

function profileForm(props) {
  const _isMounted = useRef(false);

  const [handle, setHandle] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');
  const [skills, setSkills] = useState('');
  const [bio, setBio] = useState('');
  const [githubusername, setGithubUserName] = useState('');
  const [twitter, setTwitter] = useState('');
  const [youtube, setYoutube] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');

  useEffect(() => {
    props.getProfileById(props.id);

    if (props.profile) {
      const {
        handle,
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        social,
      } = props.profile;
      const skillsJoined = skills.join(',');

      setHandle(handle);
      setCompany(company);
      setWebsite(website);
      setLocation(location);
      setStatus(status);
      setSkills(skillsJoined);
      setBio(bio);
      setGithubUserName(githubusername);
      setTwitter(social.twitter);
      setYoutube(social.youtube);
      setLinkedin(social.linkedin);
      setFacebook(social.facebook);
      setInstagram(social.instagram);
    }

    _isMounted.current = true;
  }, [_isMounted.current]);

  const onFormSubmit = async e => {
    e.preventDefault();

    const profileInfo = {
      handle,
      company,
      website,
      location,
      githubusername,
      skills,
      status,
      bio,
    };
    profileInfo.social = {
      twitter,
      youtube,
      linkedin,
      instagram,
      facebook,
    };

    props.postProfile(profileInfo, props.history);
  };

  const renderSocialLinks = isOpen => {
    return (
      <Collapse in={isOpen} animateOpacity>
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Flex direction="column">
            <Box>
              <ImageInputField
                m="1rem"
                fontSize="1.2rem"
                mb="0.25rem"
                label="Twitter"
                id="twitter"
                isRequired={false}
                icon="fab fa-twitter"
                placeholder="Twitter ID"
                color="#1da1f2"
                onChange={e => setTwitter(e.target.value)}
                value={twitter}
                error={
                  props.error && props.error.twitter
                    ? props.error.twitter
                    : null
                }
              />
              <ImageInputField
                m="1rem"
                fontSize="1.2rem"
                mb="0.25rem"
                label="Facebook"
                id="facebook"
                isRequired={false}
                icon="fab fa-facebook"
                placeholder="Facebook ID"
                color="#4267b2"
                onChange={e => setFacebook(e.target.value)}
                value={facebook}
                error={
                  props.error && props.error.facebook
                    ? props.error.facebook
                    : null
                }
              />
              <ImageInputField
                m="1rem"
                fontSize="1.2rem"
                mb="0.25rem"
                label="Linkedin"
                id="linkedin"
                isRequired={false}
                icon="fab fa-linkedin"
                placeholder="Linkedin ID"
                color="#006192"
                onChange={e => setLinkedin(e.target.value)}
                value={linkedin}
                error={
                  props.error && props.error.linkedin
                    ? props.error.linkedin
                    : null
                }
              />
              <ImageInputField
                m="1rem"
                fontSize="1.2rem"
                mb="0.25rem"
                label="Youtube"
                id="youtube"
                isRequired={false}
                icon="fab fa-youtube"
                placeholder="Youtube ID"
                color="#ff0000"
                onChange={e => setYoutube(e.target.value)}
                value={youtube}
                error={
                  props.error && props.error.youtube
                    ? props.error.youtube
                    : null
                }
              />
              <ImageInputField
                m="1rem"
                fontSize="1.2rem"
                mb="0.25rem"
                label="Instagram"
                id="instagram"
                isRequired={false}
                icon="fab fa-instagram"
                placeholder="Instagram ID"
                color="#833ab4"
                onChange={e => setInstagram(e.target.value)}
                value={instagram}
                error={
                  props.error && props.error.instagram
                    ? props.error.instagram
                    : null
                }
              />
            </Box>
          </Flex>
        </ScaleFade>
      </Collapse>
    );
  };

  const renderForm = () => {
    const { isOpen, onToggle } = useDisclosure();
    return (
      <Flex align="center" direction="column">
        <Box mt="1rem" mb="0.75rem">
          <Heading fontWeight="700">Profile Form</Heading>
        </Box>
        <Box w="90%">
          <form onSubmit={onFormSubmit}>
            <InputField
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="Handle"
              id="handle"
              placeholder="Handle"
              onChange={e => setHandle(e.target.value)}
              isRequired={true}
              value={handle}
              error={
                props.error && props.error.handle ? props.error.handle : null
              }
            />
            <InputField
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="Company"
              id="company"
              placeholder="Company"
              onChange={e => setCompany(e.target.value)}
              value={company}
              isRequired={false}
              error={
                props.error && props.error.comapny ? props.error.company : null
              }
            />
            <InputField
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="Website"
              id="website"
              placeholder="Website"
              helperText="eg-https://www.test.com"
              onChange={e => setWebsite(e.target.value)}
              value={website}
              isRequired={false}
              error={
                props.error && props.error.website ? props.error.website : null
              }
            />
            <InputField
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="Location"
              id="location"
              placeholder="Location"
              onChange={e => setLocation(e.target.value)}
              value={location}
              isRequired={false}
              error={
                props.error && props.error.location
                  ? props.error.location
                  : null
              }
            />
            <InputField
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="Tech Stack"
              id="status"
              placeholder="Tech Stack"
              onChange={e => setStatus(e.target.value)}
              isRequired={true}
              value={status}
              error={
                props.error && props.error.status ? props.error.status : null
              }
            />
            <InputField
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="Skills"
              id="skills"
              placeholder="Skiils"
              helperText="values must be comma separated"
              onChange={e => setSkills(e.target.value)}
              isRequired={false}
              value={skills}
              error={
                props.error && props.error.skills ? props.error.skills : null
              }
            />
            <InputField
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="GitHub"
              id="githubusername"
              placeholder="GitHub UserName"
              onChange={e => setGithubUserName(e.target.value)}
              value={githubusername}
              isRequired={false}
              error={
                props.error && props.error.githubusername
                  ? props.error.githubusername
                  : null
              }
            />
            <InputTextArea
              m="1rem"
              fontSize="1.2rem"
              mb="0.25rem"
              label="Bio"
              id="bio"
              placeholder="Bio"
              onChange={e => setBio(e.target.value)}
              isRequired={false}
              value={bio}
              error={props.error && props.error.bio ? props.error.bio : null}
            />

            <Checkbox
              m="1rem"
              onChange={onToggle}
              value={isOpen}
              borderColor="#007a5b">
              <Text fontSize="1.1rem" fontWeight="500" color="#007a5b">
                Add Social Media Links
              </Text>
            </Checkbox>
            {renderSocialLinks(isOpen)}

            <Button
              type="submit"
              bg="#16c79a"
              display="block"
              mx="auto"
              w="60%"
              my="2rem"
              _focus={{ outline: 'none' }}
              _hover={{ background: '#13b38a' }}>
              Create Profile
            </Button>
          </form>
        </Box>
      </Flex>
    );
  };

  return (
    <Flex justify="center">
      <Box w="80%" m="1rem">
        <RouterLink to="/dashboard">
          <Button
            bg=" #16c79a"
            _hover={{ background: '#13b38a' }}
            _focus={{ outline: 'none' }}>
            Back to DashBoard
          </Button>
        </RouterLink>
        <Center>
          <Box w="60%" borderRadius="5px" bg="#e7fbff" my="1rem">
            {renderForm()}
          </Box>
        </Center>
      </Box>
    </Flex>
  );
}

const mapStateToProps = state => {
  return {
    id: state.auth.user._id,
    profile: state.profile.data,
    error: state.error.data,
  };
};

export default connect(mapStateToProps, { getProfileById, postProfile })(
  profileForm
);
