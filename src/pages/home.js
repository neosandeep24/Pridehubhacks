import { motion } from "framer-motion";
import image1 from "../assets/lgtbq_logo.jpg";
import image2 from "../assets/logo.jpg";
import "../styles/LandingPage.css";
// import { useState } from "react";
// import Loader from "../components/Loader";

const Home = () => {
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   // Simulate loading delay
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <div>
      
      
        <div className="landing-page">
          <motion.div
            className="section"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="content">
              <motion.div
                className="text"
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="title"
                >
                  Welcome to Our LGBTQ+ Community
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="description"
                >
                  Discover the diverse and inclusive world of LGBTQ+ products. Join our community to connect with like-minded individuals who share similar experiences and interests. Explore a wide range of LGBTQ+ products and support LGBTQ+ businesses. Stay updated with the latest trends, events, and news in the LGBTQ+ community. Participate in meaningful discussions and contribute to the LGBTQ+ dialogue. Access resources and support networks for LGBTQ+ individuals.
                </motion.p>
              </motion.div>
              <motion.div
                className="image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.img
                  src={image1}
                  className="larger-image"
                  alt="Product"
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="section"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="content">
              <motion.div
                className="image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.img
                  src={image2}
                  alt="Product"
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </motion.div>
              <motion.div
                className="text"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="title"
                >
                  Explore Something <span className="special-text">Special</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="description"
                >
                  Discover the latest trends and designs.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Additional Content */}
          <motion.div
            className="additional-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="special-heading"
            >
              Why Join Our LGBTQ+ Community?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="special-text"
            >
              Our community is dedicated to creating an inclusive and supportive environment for LGBTQ+ individuals. Here are some reasons to join us:
            </motion.p>

            {/* List */}

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {/* List Items */}

              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="list-item"
              >
                Connect with like-minded individuals who share similar experiences and interests.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="list-item"
              >
                Discover a wide range of LGBTQ+ products and support LGBTQ+ businesses.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="list-item"
              >
                Stay updated with the latest trends, events, and news in the LGBTQ+ community.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="list-item"
              >
                Participate in meaningful discussions and contribute to the LGBTQ+ dialogue.
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="list-item"
              >
                Access resources and support networks for LGBTQ+ individuals.
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
    </div>
  );
};

export default Home;
