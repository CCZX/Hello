import { useCallback, useEffect, useState } from 'react';
import { DEFAULT_BRAND_COLOR } from '../constant/theme';
import { changeBrandColor, getBrandColor } from '../utils/theme';

export function useBrandColorState() {
  const [color, setColor] = useState(DEFAULT_BRAND_COLOR);

  const onChangeColor = useCallback((color: string) => {
    changeBrandColor(color, setColor);
  }, []);

  useEffect(() => {
    setColor(getBrandColor());
  }, []);

  return [color, onChangeColor] as const;
}
