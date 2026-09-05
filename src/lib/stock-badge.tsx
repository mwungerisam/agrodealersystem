import { Badge } from "@/components/ui/badge";
import { t } from "@/lib/i18n";

interface StockBadgeProps {
  qty: number;
  min: number;
}

export function StockBadge({ qty, min }: StockBadgeProps) {
  if (qty <= 0) {
    return (
      <Badge variant="destructive" className="font-medium">
        {t.outOfStock}
      </Badge>
    );
  }

  if (qty <= min) {
    return (
      <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-100 font-medium">
        {t.lowStock}
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="border-green-600/30 text-green-700 bg-green-50/50 font-medium">
      {t.inStock}
    </Badge>
  );
}
