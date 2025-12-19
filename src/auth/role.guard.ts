import { CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

export class RoleGuard implements CanActivate {
  constructor(private readonly role: 'admin' | 'viewer') {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const role = request.headers['role'];

    if (role !== this.role) {
      throw new ForbiddenException('Access denied');
    }
    return true;
  }
}
