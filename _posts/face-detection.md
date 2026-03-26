---
title: "Tiny Face Detection and Recognition in the Wild"
excerpt: "Face recognition is a fundamental issue in computer science today, as it is a key step towards many subsequent face-related applications, including face parsing, face verification, face labeling and retrieval, and so on. Over the past few decades, various accurate and efficient techniques have been proposed for most constrained situations."
coverImage: "/assets/blog/face-detection/cover.png"
date: "2018-09-25T05:35:07.322Z"
categories: ["Computer Vision", "AI", "Deep Learning"]
author:
  name: Atul Lal
  picture: "/assets/blog/authors/atullal.jpeg"
ogImage:
  url: "/assets/blog/face-detection/cover.png"
---

## Introduction to the Challenge

Face recognition is a fundamental, almost ubiquitous, issue in computer science today. It serves as the primary stepping stone towards many subsequent face-related applications: face parsing, face verification, auto-tagging algorithms, and robust retrieval systems.

<div class="doodle">
  *Remember:* Over the past few decades, we've gotten really good at detecting faces in *constrained* situations (think passport photos). But the real world is messy!
</div>

However, one of the most formidable challenges in modern computer vision remains detecting <span class="highlighter">tiny faces in unconstrained environments</span>—often referred to as "in the wild". In this post, we're going to explore how we leveraged <a href="https://arxiv.org/abs/1406.2661" target="_blank" class="tooltip">Generative Adversarial Networks (GANs)<span class="tooltip-content">A class of machine learning frameworks designed by Ian Goodfellow et al. in 2014, where two neural networks contest with each other.</span></a> to enhance the accuracy of face recognition algorithms by artificially generating super-resolution images.

## Tiny Face Detection and Recognition

So, what exactly *is* a tiny face? In our research context, <span class="highlighter">tiny faces are defined as faces that occupy less than 10% of an image's total area.</span>

<div class="post-it">
  <strong>Why is it so hard?</strong> At less than 10% area, a face might only be a few pixels wide. Key facial landmarks (eyes, nose, mouth) are often blurred together into a single amorphous blob.
</div>

Traditional methods for detecting faces relied heavily on sliding window approaches or <a href="https://towardsdatascience.com/region-proposal-network-a-detailed-view-1305c7875853" target="_blank" class="tooltip">Region Proposal Networks (RPNs)<span class="tooltip-content">A fully convolutional network that simultaneously predicts object bounds and objectness scores at each position.</span></a>. While excellent for standard faces, these techniques are computationally expensive when scaling down windows to search for tiny objects, and they often fail spectacularly on low-resolution patches.

### Our Two-Step Approach

To address this challenge head-on, we proposed a novel approach utilizing GANs to hallucinate high-resolution details onto low-resolution tiny faces. The architecture works in a two-stage pipeline:

1. **Super-Resolution Generation:** We use a GAN to upscale and generate high-resolution image patches from low-resolution inputs.
2. **Detection & Recognition:** We pass these newly generated, high-fidelity images into a pre-trained face recognition model to accurately detect and classify the faces.

Our specific GAN architecture is heavily inspired by <a href="https://arxiv.org/abs/1609.04802" target="_blank" class="tooltip">SRGAN (Super-Resolution Generative Adversarial Network)<span class="tooltip-content">A framework capable of inferring photo-realistic natural images for 4x upscaling factors.</span></a>. It excels at inferring photo-realistic natural images for massive upscaling factors (like 4x).

To achieve this, SRGAN abandons standard Mean Squared Error (MSE) loss, which tends to produce overly smooth, blurry images. Instead, it utilizes a **perceptual loss function** which consists of an adversarial loss (pushing the generator to fool the discriminator) and a content loss (ensuring the upscaled image actually matches the low-res input's semantic features).

## Empirical Results

We evaluated our two-step approach on several notoriously difficult benchmark datasets for "in the wild" detection.

<div class="doodle">
  *Performance metrics:* We crushed it on WIDER FACE and FDDB! 🚀
</div>

Our results unequivocally demonstrate that this GAN-assisted approach outperforms traditional state-of-the-art methods for detecting tiny faces.

- On the <span class="highlighter">WIDER FACE dataset</span>, we achieved an average precision of **0.89**.
- On the <span class="highlighter">FDDB dataset</span>, we hit an average precision of **0.92**.

### Robustness Testing

We didn't stop at just top-line metrics. We conducted extensive ablation studies to evaluate the impact of different hyperparameters and environmental factors, including:
- The absolute size of the input image crops.
- The number of training epochs required for the GAN to converge.
- Variations in the underlying GAN architecture.

The data shows that our approach is highly robust. It can achieve high accuracy even when fed extremely small input patches and requires a surprisingly limited number of training epochs to produce actionable super-resolution images.

## Conclusion

In conclusion, we have proposed a highly effective new approach for tiny face detection and recognition in unconstrained, "in the wild" environments. By offloading the burden of low-resolution feature extraction to a super-resolution GAN, we allow standard, highly-optimized face detection networks to operate on clear, hallucinated imagery—bridging the gap between the lab and the real world.

<div class="citations">
  <h3>References & Citations</h3>
  <ol>
    <li>
      Ledig, C., et al. (2017). "Photo-Realistic Single Image Super-Resolution Using a Generative Adversarial Network". <em>CVPR</em>. <a href="https://arxiv.org/abs/1609.04802">Link</a>
    </li>
    <li>
      Goodfellow, I., et al. (2014). "Generative Adversarial Nets". <em>NIPS</em>. <a href="https://arxiv.org/abs/1406.2661">Link</a>
    </li>
    <li>
      Yang, S., et al. (2016). "WIDER FACE: A Face Detection Benchmark". <em>CVPR</em>.
    </li>
  </ol>
</div>