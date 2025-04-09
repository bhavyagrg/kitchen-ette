# menu/apps.py

from django.apps import AppConfig
import os

class MenuConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'menu'

    def ready(self):
        # if os.environ.get('RUN_MAIN') != 'true':
        #     return

        try:
            from django.contrib.auth import get_user_model
            User = get_user_model()

            username = os.environ.get('DJANGO_ADMIN_USERNAME', 'admin')
            password = os.environ.get('DJANGO_ADMIN_PASSWORD', 'admin123')
            email = os.environ.get('DJANGO_ADMIN_EMAIL', 'admin@example.com')

            if not User.objects.filter(username=username).exists():
                print("🔐 Creating superuser...")
                User.objects.create_superuser(username=username, password=password, email=email)
            else:
                print("✅ Superuser already exists.")
        except Exception as e:
            print(f"❌ Error creating superuser: {e}")
