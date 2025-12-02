import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'ابسيمارتا شراب',
    category: 'صحة الجهاز التنفسي',
    description: 'مذيب للبلغم و موسع للشعب الهوائية، يعمل كمضاد للالتهاب ويرطب مجرى التنفس ليساعد على تهدئة السعال.',
    benefits: ['مذيب للبلغم وموسع للشعب', 'مضاد للالتهاب', 'يرطب مجرى التنفس ويهدئ السعال'],
    image: 'https://lh3.googleusercontent.com/d/1jB1akFALfC5pre2cCvnigXFSxYgecunN',
    price: '55 ج.م'
  },
  {
    id: '2',
    name: 'لابينسيرون شراب',
    category: 'الحديد والمناعة',
    description: 'تركيبة مميزة تحتوي على الحديد ومالتي فيتامين وفيتامين سي وزينك بطعم التوتي فروتي. يدعم تكوين الهيموجلوبين في الدم.',
    benefits: ['زيادة الهيموجلوبين', 'فاتح للشهية', 'مجدد للطاقة', 'زيادة التركيز', 'رفع المناعة'],
    image: 'https://lh3.googleusercontent.com/d/1zB5VHzB-QiQVRmlLTnGGKx1AB1fHR6oo',
    price: '65 ج.م'
  },
  {
    id: '3',
    name: 'ابينسيكال شراب',
    category: 'صحة العظام والنمو',
    description: 'مكمل غذائي غني بالكالسيوم والزنك وفيتامين د3 والمغنسيوم. تركيبة مميزة لصحة أفضل بطعم البرتقال.',
    benefits: ['عظام صحية', 'أسنان قوية', 'بنيان عضلي قوي', 'رفع المناعة'],
    image: 'https://lh3.googleusercontent.com/d/1cizVQkjJuBLvxfSEzJ1G6UmiCh-X6efl',
    price: '60 ج.م'
  },
  {
    id: '4',
    name: 'ملتي فيتا للرجال',
    category: 'صحة عامة',
    description: 'مكمل غذائي شامل يحتوي على الفيتامينات والمعادن الأساسية المصممة خصيصاً لاحتياجات الرجال.',
    benefits: ['طاقة وحيوية', 'صحة جنسية', 'أداء رياضي'],
    image: 'https://picsum.photos/400/400?random=4',
    price: '300 ج.م'
  },
  {
    id: '5',
    name: 'بيوتي سكين & هير',
    category: 'الجمال',
    description: 'بيوتين وكولاجين وفيتامينات متعددة لدعم صحة الشعر والبشرة والأظافر وإبراز جمالك الطبيعي.',
    benefits: ['شعر أقوى', 'بشرة نضرة', 'أظافر صحية'],
    image: 'https://picsum.photos/400/400?random=5',
    price: '350 ج.م'
  },
  {
    id: '6',
    name: 'فيتامين د3 - 5000',
    category: 'العظام',
    description: 'جرعة عالية من فيتامين د3 لدعم صحة العظام والأسنان وتعزيز المناعة.',
    benefits: ['عظام قوية', 'امتصاص الكالسيوم', 'مزاج أفضل'],
    image: 'https://picsum.photos/400/400?random=6',
    price: '200 ج.م'
  }
];