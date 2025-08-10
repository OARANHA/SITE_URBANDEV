import { Router } from 'express'
import dashboardEnterpriseController from '../../controllers/dashboard-enterprise/dashboard-enterprise.controller'

const router = Router()

// Enterprise Dashboard Statistics
router.get('/stats', dashboardEnterpriseController.getEnterpriseStats)
router.get('/stats/overview', dashboardEnterpriseController.getOverviewStats)
router.get('/stats/security', dashboardEnterpriseController.getSecurityStats)
router.get('/stats/business', dashboardEnterpriseController.getBusinessStats)

// Workspace Statistics
router.get('/workspaces', dashboardEnterpriseController.getWorkspaceStats)
router.get('/workspaces/top', dashboardEnterpriseController.getTopWorkspaces)
router.get('/workspaces/growth', dashboardEnterpriseController.getWorkspaceGrowth)

// Organization Statistics
router.get('/organizations', dashboardEnterpriseController.getOrganizationStats)
router.get('/organizations/top', dashboardEnterpriseController.getTopOrganizations)

// User Statistics
router.get('/users', dashboardEnterpriseController.getUserStats)
router.get('/users/growth', dashboardEnterpriseController.getUserGrowth)
router.get('/users/active/count', dashboardEnterpriseController.getActiveUsersCount)

// SSO Statistics
router.get('/sso/stats', dashboardEnterpriseController.getSSOStats)
router.get('/sso/logins', dashboardEnterpriseController.getSSOLoginStats)
router.get('/sso/providers', dashboardEnterpriseController.getSSOProviderStats)

// Security & Audit Statistics
router.get('/security/stats', dashboardEnterpriseController.getSecurityStats)
router.get('/security/audit', dashboardEnterpriseController.getAuditActivities)
router.get('/security/events', dashboardEnterpriseController.getSecurityEvents)
router.get('/security/login-activity', dashboardEnterpriseController.getLoginActivity)

// Business Statistics
router.get('/business/stats', dashboardEnterpriseController.getBusinessStats)
router.get('/business/revenue', dashboardEnterpriseController.getRevenueStats)
router.get('/business/customers', dashboardEnterpriseController.getCustomerStats)
router.get('/business/compliance', dashboardEnterpriseController.getComplianceStats)

// System Health & Performance
router.get('/system/health', dashboardEnterpriseController.getSystemHealth)
router.get('/system/performance', dashboardEnterpriseController.getPerformanceMetrics)
router.get('/system/resources', dashboardEnterpriseController.getResourceUsage)

// Analytics & Trends
router.get('/analytics', dashboardEnterpriseController.getAnalytics)
router.get('/analytics/trends', dashboardEnterpriseController.getTrends)
router.get('/analytics/comparison', dashboardEnterpriseController.getComparisonData)

// Activity Timeline (Enterprise)
router.get('/activity', dashboardEnterpriseController.getActivityTimeline)
router.get('/activity/recent', dashboardEnterpriseController.getRecentActivity)

export default router