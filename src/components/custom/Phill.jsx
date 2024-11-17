
import PropTypes from 'prop-types';

const Phill = ({leftText, rightText}) => {
    Phill.propTypes = {
        leftText: PropTypes.string.isRequired,
        rightText: PropTypes.string.isRequired
      };
  return (
    <>
        <div className="phill w-fit border-2 border-black flex items-center justify-center gap-2 px-2 py-1 rounded-full font-inter text-xs font-semibold">
          <span>{leftText}</span>
          <div className="w-fit flex items-center justify-center">
          <img className="w-[12px] h-[12px] mt-[1px]" src="/icons/light/arrow-right-light.svg" alt="Arrow Right" />
          </div>
          <span>{rightText}</span>
        </div>
    </>
  )
}

export default Phill
