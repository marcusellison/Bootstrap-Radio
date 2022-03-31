/* Edited to center text more in center of button - was looking a bit off.
 * added center alignment in parent (Welcome.jsx) to center Badge & Tooltip
 */

const Badge = ({ title = "", className = "bg-primary" }) => {
  // set to d-inline-block to make div width based on content
  return <div className={className}>{title}</div>;
};

export default Badge;
