import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="relative w-full h-auto bg-cover bg-no-repeat bg-center bg-neutral-50 border-t border-neutral-200"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 455 145' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='455' height='145' fill='url(%23paint0_radial_4_3)'/%3E%3Crect width='455' height='145' fill='url(%23paint1_radial_4_3)' fill-opacity='0.2'/%3E%3Crect width='455' height='145' fill='url(%23paint2_radial_4_3)' fill-opacity='0.2'/%3E%3Crect width='455' height='145' fill='url(%23paint3_radial_4_3)' fill-opacity='0.2'/%3E%3Cdefs%3E%3CradialGradient id='paint0_radial_4_3' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(323) rotate(180) scale(105.5 87.9744)'%3E%3Cstop stop-color='%23D6F7B6'/%3E%3Cstop offset='0.901042' stop-color='%23D6F6B6' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='paint1_radial_4_3' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(434 19.5) rotate(142.267) scale(106.212 68.9764)'%3E%3Cstop stop-color='%23EEFF86'/%3E%3Cstop offset='1' stop-color='%23EEFF86' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_4_3' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(2.34024e-06 58.5) rotate(19.2198) scale(57.717 65.183)'%3E%3Cstop offset='0.151042' stop-color='%23557AFF'/%3E%3Cstop offset='1' stop-color='%23B8C7FF' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='paint3_radial_4_3' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(11.5) rotate(0.950881) scale(120.517 71.0739)'%3E%3Cstop stop-color='%23B872FF'/%3E%3Cstop offset='0.921875' stop-color='%23B872FF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E")`,
      }}
    >
      <div className="container mx-auto py-8 md:py-12 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">Atul Lal</h3>
          <p className="text-gray-500 flex items-center">
            <FaEnvelope className="mr-2" />
            atul.lal123@gmail.com
          </p>
          <p className="text-gray-500 flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            Boston, MA, USA
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-2">My Socials</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 flex items-center"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 flex items-center"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 flex items-center"
            >
              <FaTwitter className="mr-2" />
              Twitter
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <h3 className="text-lg font-bold mb-2">About Me</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl
            eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl
            eget nisl.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;