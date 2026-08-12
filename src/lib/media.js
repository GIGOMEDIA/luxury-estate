const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
import PrimaryEstateView from '../assets/primary-estate-view.png'
import InteriorView from '../assets/interior-view.png'
import KitchenView from '../assets/kitchen.png'
import FloorPlans from '../assets/floor-plans.png'
import BelAirImg from '../assets/bel-air.png'
import PenthouseImg from '../assets/central-park.png'
import VillaAzureImg from '../assets/villa-azure.png'
import HistoricImg from '../assets/historic.png'
import CoastalImg from '../assets/coastal-estate.png'
import MountainImg from '../assets/mountain-modern.png'
import WaterfallImg from '../assets/Waterfall.png'
import AdvisorImg from '../assets/advisor.png'
import AlexanderImg from '../assets/alexander-knight.jpg'

const BACKEND_ASSET_MAP = {
  '/images/properties/glass-house-reserve/hero.jpg': PrimaryEstateView,
  '/images/properties/glass-house-reserve/interior.jpg': InteriorView,
  '/images/properties/glass-house-reserve/kitchen.jpg': KitchenView,
  '/images/properties/azure-bay-villa/hero.jpg': VillaAzureImg,
  '/images/properties/azure-bay-villa/living.jpg': InteriorView,
  '/images/properties/azure-bay-villa/patio.jpg': CoastalImg,
  '/images/properties/sovereign-estate/hero.jpg': HistoricImg,
  '/images/properties/sovereign-estate/exterior.jpg': HistoricImg,
  '/images/properties/sovereign-estate/garden.jpg': WaterfallImg,
  '/images/properties/helix-house/hero.jpg': CoastalImg,
  '/images/properties/helix-house/interior.jpg': InteriorView,
  '/images/properties/sutton-place-flat/hero.jpg': PenthouseImg,
  '/images/users/avery.jpg': AdvisorImg,
  '/images/users/marta.jpg': AlexanderImg,
  '/images/agents/julian.jpg': AdvisorImg,
  '/images/agents/elena.jpg': AlexanderImg,
  '/images/agents/marcus.jpg': AdvisorImg,
  '/images/properties/featured-1.jpg': BelAirImg,
  '/images/properties/featured-2.jpg': PenthouseImg,
  '/images/properties/featured-3.jpg': VillaAzureImg,
  '/images/collections/coastal-moderns/cover.jpg': CoastalImg,
  '/images/collections/penthouse-living/cover.jpg': PenthouseImg,
  '/images/collections/historic-manors/cover.jpg': HistoricImg,
  '/images/collections/mountain-sanctuaries/cover.jpg': MountainImg,
}

export const resolveMediaUrl = (value) => {
  if (!value) {
    return ''
  }

  if (BACKEND_ASSET_MAP[value]) {
    return BACKEND_ASSET_MAP[value]
  }

  if (/^https?:\/\//i.test(value)) {
    return value
  }

  if (value.startsWith('/')) {
    return `${API_BASE_URL}${value}`
  }

  return value
}

export const resolvePropertyImage = (property) => resolveMediaUrl(property?.image || property?.heroImageUrl)

export const resolveAgentImage = (agent) => resolveMediaUrl(agent?.photoUrl || agent?.image || agent?.avatarUrl)
