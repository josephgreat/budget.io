import {
  Box,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase";
import ButtonC from "../components/Button";
import MediaQuery from "../utils/useWindowSize";
import Logo from "../components/Logo";
import {
  FaGoogle,
  FaFacebook,
  FaEye,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import MoneyBag from "../assets/JsxImgs/Money";
import ExpensesImg from "../assets/JsxImgs/ExpensesImg";
import ListImg from "../assets/JsxImgs/ListImg";
// import Pen from "../assets/JsxImgs/Pen";
import { Link as ReactLink, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export default function Auth({ title, context }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const { setUserCredentials } = useContext(context);
  let navigate = useNavigate();
  let { id } = useParams();
  let toast = useToast();

  let handleResponse = async (response) => {
    const db = getFirestore(app);

    id = response.localId !== undefined ? response.localId : response.uid;
    let userInfo = {
      name: response.displayName,
      profilePic: response.photoUrl !== undefined ? response.photoUrl : null,
      userId: response.localId !== undefined ? response.localId : response.uid,
      email: response.email,
      emailVerified:response.emailVerified,
    };
    setUserCredentials(userInfo);
    await setDoc(doc(db, "users", `user${id}`), userInfo);
    navigate(`/user${id}`);
  }
  let handleAuth = (purpose) => {
    const authentication = getAuth();

    if (purpose === "facebook") {
      let facebookProvider = new FacebookAuthProvider();
      signInWithPopup(authentication, facebookProvider)
        .then(({_tokenResponse}) => {
          handleResponse(_tokenResponse);
          if (title === "Login") {
            toast({
              title: "Welcome Back",
              description: "Keep exploring budget.io",
              isClosable: true,
              status: "success",
              position: "top-right",
              duration: 4000,
            });
          }
        })
        .catch((error) => console.log(error));
    } else if (purpose === "google") {
      let googleProvider = new GoogleAuthProvider();
      signInWithPopup(authentication, googleProvider)
        .then(({ _tokenResponse }) => {
          handleResponse(_tokenResponse);
          if (title === "Login") {
            toast({
              title: "Welcome Back",
              description: "Keep exploring budget.io",
              isClosable: true,
              status: "success",
              position: "top-right",
              duration: 4000,
            });
          }
        })
        .catch((error) => console.log(error));
    } else {
      if (!userName) {
        toast({
          description: "Username field cannot be empty",
          status: "error",
          position: "top-end",
          duration: 3000,
          isClosable: false,
        });
        return;
      } else if (!password) {
        toast({
          description: "Password field cannot be empty",
          status: "error",
          position: "top-end",
          duration: 3000,
          isClosable: false,
        });
        return;
      } else if (password.length < 6) {
        toast({
          description: "Password must have at least 6 characters",
          status: "error",
          position: "top-end",
          duration: 3000,
          isClosable: false,
        });
        return;
      } else {
        if (purpose === "Sign up") {
          if (password !== cPassword) {
            toast({
              description: "Password Mismatch",
              status: "error",
              position: "top-end",
              duration: 3000,
              isClosable: false,
            });
            return;
          }
          createUserWithEmailAndPassword(authentication, userName, password)
            .then(({ user }) => {
              handleResponse(user);
              toast({
                title: "Account created",
                description: "You are set to explore budget.io",
                isClosable: true,
                status: "success",
                position: "top-right",
                duration: 4000,
              });
            })
            .catch(({ code }) => {
              if (code === "auth/invalid-email") {
                toast({
                  title: "Invalid Email",
                  description: "Checkmate your email for validity",
                  isClosable: true,
                  status: "error",
                  position: "top-right",
                  duration: 4000,
                });
              }
              if (code === "auth/email-already-in-use") {
                toast({
                  description: "Email already in use",
                  isClosable: true,
                  status: "error",
                  position: "top-right",
                  duration: 4000,
                });
              }
              if (code === "auth/weak-password") {
                toast({
                  description: "Passwor should be at least 6 in length",
                  isClosable: true,
                  status: "error",
                  position: "top-right",
                  duration: 4000,
                });
              }
            });
        } else if (purpose === "Login") {
          signInWithEmailAndPassword(authentication, userName, password)
            .then(({user}) => {
              handleResponse(user);
              toast({
                title: "Welcome Back",
                description: "Keep exploring budget.io",
                isClosable: true,
                status: "success",
                position: "top-right",
                duration: 4000,
              });
            })
            .catch(({ code }) => {
              if (code === "auth/invalid-email") {
                toast({
                  title: "Invalid Email",
                  description: "Checkmate your email for validity",
                  isClosable: true,
                  status: "error",
                  position: "top-right",
                  duration: 4000,
                });
              }
              if (code === "auth/wrong-password") {
                toast({
                  description: "Wrong Password",
                  isClosable: true,
                  status: "error",
                  position: "top-right",
                  duration: 4000,
                });
              }
              if (code === "auth/user-not-found") {
                toast({
                  description: "User not found - Sign Up",
                  isClosable: true,
                  status: "error",
                  position: "top-right",
                  duration: 4000,
                });
                navigate("/signup");
              }
            });
        }
      }
    }
    
  };

  return (
    <Container maxW="auto" p="0">
      <Box as="nav" p={"5"} boxShadow="0 1px 5px #999">
        <Logo
          primary="primary.700"
          secondary={"secondary.500"}
          iconColor="#6d006a"
        />
      </Box>
      <Flex 
        justifyContent={["center", "center", "center", "space-between"]}
        width={["90%", "85%", "80%", "70%"]}
        mx="auto"
        my="5"
      >
        <MediaQuery size="lg">
          <Flex
            width={"55%"}
            py="7"
            px="3"
            pr="6"
            pos="relative"
            as={motion.div}
            initial={{ top: "10%", opacity: 0 }}
            transition={{ duration: 4, delay: 2 }}
            animate={{ top: "0", opacity: [0.5, 1] }}
          >
            <Box
              pos={"absolute"}
              top="72%"
              left={"-5%"}
              width="35%"
              transform={"translateY(-71%)"}
            >
              <MoneyBag color={"#b39c00"} />
            </Box>
            <Box pl="20%" w="80%">
              <ListImg color1={"#333"} color2={"#444"} />
            </Box>
            <Box
              pos={"absolute"}
              right="27%"
              w="15%"
              top="45%"
              transform={"rotate3d(3, 1, 3, 45deg)"}
              zIndex="2"
            ></Box>
            <Box
              pos={"absolute"}
              left="44%"
              top="50%"
              transform={"translate(-40%, -40%)"}
              w="40%"
            >
              <ExpensesImg color={""} />
            </Box>
          </Flex>
        </MediaQuery>

        <Box width={["100%", "85%", "65%", "55%", "40%"]}>
          <Heading textAlign={"center"} textTransform="uppercase" mb="5">
            {title}
          </Heading>
          <FormControl borderBottom={"1px solid #eee"} pb="7">
            <FormHelperText fontSize={"lg"} mb="2">
              Email / Username:
            </FormHelperText>
            <InputGroup fontSize={"lg"} mb="2">
              <InputRightElement children={<FaUser />} color="primary.800" />
              <Input
                type={"text"}
                id="username"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
            </InputGroup>
            <FormHelperText fontSize={"lg"} mb="2">
              Password:
            </FormHelperText>
            <InputGroup fontSize={"lg"} mb={title === "Sign up" ? "2" : "4"}>
              <InputRightElement children={<FaEye />} color="primary.800" />
              <Input
                type={"password"}
                required
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>

            {title === "Sign up" ? (
              <>
                <FormHelperText fontSize={"lg"} mb="2">
                  Confirm Password:
                </FormHelperText>
                <InputGroup fontSize={"lg"} mb="4">
                  <InputRightElement children={<FaEye />} color="primary.800" />
                  <Input
                    type={"password"}
                    id="cpassword"
                    required
                    onChange={(e) => setCPassword(e.target.value)}
                  />
                </InputGroup>
              </>
            ) : (
              ""
            )}
            <Flex justifyContent={"center"}>
              <ButtonC
                type={"submit"}
                // width=''
                size={"lg"}
                transform="uppercase"
                variant={"solid"}
                text={title}
                bg="primary.700"
                color={"white"}
                icon={
                  title !== "Sign up" ? (
                    <FaSignInAlt color="#fff" />
                  ) : (
                    <FaUserPlus color="#fff" />
                  )
                }
                onClick={() => handleAuth(title)}
              />
            </Flex>
          </FormControl>
          <Text
            pos="relative"
            top="-13px"
            bg="white"
            display={"inline-block"}
            left="50%"
            transform={"translate(-50%)"}
            px="2"
          >
            OR
          </Text>
          <Wrap className="register-option" mb="4">
            <WrapItem cursor={"pointer"} fontWeight={"bold"} mx="auto">
              <ButtonC
                text={`${title} with Google`}
                icon={<FaGoogle />}
                iconcolor={"secondary.900"}
                iconbg="#fff"
                variant="outline"
                hoverbg={"primary.700"}
                hovercolor={"#fff"}
                borderC="primary.700"
                onClick={() => handleAuth("google")}
              />
            </WrapItem>
            <WrapItem cursor={"pointer"} fontWeight={"bold"} mx="auto">
              <ButtonC
                text={`${title} with Facebook`}
                icon={<FaFacebook />}
                iconcolor={"darkblue"}
                iconbg={"#fff"}
                variant="outline"
                hoverbg={"primary.700"}
                hovercolor={"#fff"}
                borderC="primary.700"
                onClick={() => handleAuth("facebook")}
              />
            </WrapItem>
          </Wrap>
          <Text textAlign={"center"}>
            <Link
              as={ReactLink}
              to={title === "Sign up" ? "/login" : "/signup"}
              outline={"none"}
              textDecoration="none"
              color="primary.300"
              transition={"color .3s ease"}
              _hover={{ color: "primary.900" }}
            >
              {title === "Sign up"
                ? "Already have an account? Login."
                : "Don't have an account? Sign Up."}
            </Link>
          </Text>
        </Box>
      </Flex>
    </Container>
  );
}
