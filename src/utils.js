export const isColorDark = (color) => {
  if (!color) return false;
  if (color.startsWith('url')) return true;
  let hex = color.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const r = parseInt(hex.substring(0, 2), 16) || 0;
  const g = parseInt(hex.substring(2, 4), 16) || 0;
  const b = parseInt(hex.substring(4, 6), 16) || 0;
  return (r * 0.299 + g * 0.587 + b * 0.114) < 128;
};