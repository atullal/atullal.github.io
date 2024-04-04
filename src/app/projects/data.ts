// Mock data for projects
export const projects = [
    {
      id: 1,
      image: "/assets/projects/operatorplacement-streaming.jpg",
      title: "Operator placement on edge systems in stream processing",
      description: "Utilized Raspberry Pi devices and Apache Flink to optimize edge offloading for stream processing systems, reducing latency and data traffic while maximizing resource efficiency in real-time data processing.",
      projectLink: "/posts/operatorplacement-streaming",
      repoLink: "https://github.com/atullal/flink-placement",
      technologies: ["Apache Flink", "Java", "IoT"],
      dateFrom: "January 2023",
      dateTo: "June 2023",
      categories: ["Streaming", "IoT", "Open Source"]
    },
    {
      id: 2,
      image: "/assets/projects/md5-distributed.jpg",
      title: "Scalable Distributed MD5 Hash Matching",
      description: "A project that designs a distributed system for cracking 5-character passwords using MD5 hash matching. The system employs a web interface, a management service, and multiple worker nodes to enable scalable brute-force attacks. Users can add or remove worker nodes, improving efficiency and adaptability.",
      projectLink: "/posts/md5-distributed",
      repoLink: "https://github.com/atullal/password-cracker",
      technologies: ["Python", "MD5", "React", "Flask", "Sockets", "Web-sockets"],
      dateFrom: "August 2022",
      dateTo: "December 2022",
      categories: ["Distributed System", "Computer Networks", "Backend", "Frontend"]
    },
    {
      id: 3,
      image: "/assets/projects/home-mortgage-big-data.jpg",
      title: "Exploring the Home Mortgage Market using Spark on Google Cloud",
      description: "Predicting loan approval factors for home mortgages using the 2016-17 HMDA dataset. Identifying key influences such as gender, race, income, and property type, lenders can make data-driven decisions, and enhance profitability while assessing credit risk accurately.",
      projectLink: "/posts/home-mortgage-big-data",
      repoLink: "https://github.com/atullal/Exploring-the-Home-Mortgage-Market",
      technologies: ["Google Cloud Platform", "Spark", "Python", "Jupyter"],
      dateFrom: "January 2023",
      dateTo: "June 2023",
      categories: ["Big Data", "Machine Learning", "Cloud Computing"]
    },
    {
      id: 4,
      image: "/assets/projects/video-compression-deep-learning.jpg",
      title: "Video Compression using Deep Learning",
      description: "Built a DNN based model which compressed video files using autoencoders.Compressed video matrix using vector decomposition, motion estimation and DNN based autoencoders.",
      projectLink: "/posts/video-compression-deep-learning",
    //   repoLink: "https://github.com/atullal/Exploring-the-Home-Mortgage-Market",
      technologies: ["Keras", "PyTorch", "Python", "Computer Vision"],
      dateFrom: "August 2019",
      dateTo: "January 2020",
      categories: ["Deep Learning", "Artificial Intelligence"]
    },
    {
      id: 5,
      image: "/assets/projects/boruvka-parallel.jpg",
      title: "Multithreaded Borůvka's algorithm",
      description: "Worked on solving minimum spanning tree of a graph using Boruvka’s algorithm in a multi-threaded environment. Tested the multi-threaded application on multiple high performance 200-core super computers to find bottlenecks and compare performance.",
      projectLink: "/posts/boruvka-parallel",
    //   repoLink: "https://github.com/atullal/Exploring-the-Home-Mortgage-Market",
      technologies: ["Java", "Data Structures", "Graph", "Algorithms", "Threading"],
      dateFrom: "June 2018",
      dateTo: "August 2018",
      categories: ["High Performance Computing", "Algorithms"]
    },
    {
      id: 6,
      image: "/assets/projects/face-detection.jpg",
      title: "Tiny face detection in the wild",
      description: "The project targets tiny face detection using a GAN to enhance low-resolution images, boosting detection accuracy on thermal images. Implemented with Keras, a deep learning framework.",
      projectLink: "/posts/face-detection",
    //   repoLink: "https://github.com/atullal/Exploring-the-Home-Mortgage-Market",
      technologies: ["Keras", "Python", "Jupyter"],
      dateFrom: "August 2018",
      dateTo: "June 2019",
      categories: ["Computer Vision", "Deep Learning", "Artificial Intelligence"]
    },
    // Add more project objects as needed
  ];